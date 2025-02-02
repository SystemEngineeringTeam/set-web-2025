#!/bin/bash
find . -type f -name "*.webp" | while read INPUT; do
    # 画像サイズが 810px 以下の場合はリサイズしない
    if [ $(identify -format "%w" "$INPUT") -le 810 ]; then
        continue
    fi
    cwebp -resize 810 0 "$INPUT" -o "$INPUT"
done
