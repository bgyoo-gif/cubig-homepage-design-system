#!/bin/bash
# Job watcher — pending job이 생기면 Claude Code에 파이프라인 실행 요청
# Usage: ./server/watch.sh (서버와 별도 터미널에서 실행)

JOBS_DIR="$(dirname "$0")/jobs"
PROCESSED_FILE="$JOBS_DIR/.processed"
touch "$PROCESSED_FILE"

echo "🔍 Watching for new jobs in $JOBS_DIR..."
echo "   Press Ctrl+C to stop"

while true; do
  for job_file in "$JOBS_DIR"/*.json; do
    [ -f "$job_file" ] || continue
    job_id=$(basename "$job_file" .json)

    # Skip already processed
    grep -q "$job_id" "$PROCESSED_FILE" 2>/dev/null && continue

    # Check if pending
    status=$(python3 -c "import json; print(json.load(open('$job_file'))['status'])" 2>/dev/null)
    if [ "$status" = "pending" ]; then
      filename=$(python3 -c "import json; print(json.load(open('$job_file'))['filename'])" 2>/dev/null)
      echo ""
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo "📋 New job: $job_id"
      echo "📄 File: $filename"
      echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      echo ""
      echo "💡 Run in Claude Code:"
      echo "   input/$filename 전체 변환해줘 (job: $job_id)"
      echo ""

      # Mark as notified
      echo "$job_id" >> "$PROCESSED_FILE"
    fi
  done
  sleep 3
done
