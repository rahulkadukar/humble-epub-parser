#! /bin/bash

EPUB_DIR=/data/uploads/ebooks
CALIBRE_DIR=/data/calibre/calibre-library

for f in $(ls $EPUB_DIR/*.epub)
do
  calibredb add $f --library-path $CALIBRE_DIR
  rm $f
done

