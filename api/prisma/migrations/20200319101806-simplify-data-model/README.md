# Migration `20200319101806-simplify-data-model`

This migration has been generated by JuliaRechkunova at 3/19/2020, 10:18:06 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "quaint"."ifk_entry_chapter_id"

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Entry" (
    "answer" TEXT NOT NULL DEFAULT '' ,
    "dayTime" TEXT NOT NULL DEFAULT 'MORNING' ,
    "id" TEXT NOT NULL  ,
    "question" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id")
) 

INSERT INTO "quaint"."new_Entry" ("answer", "id", "question") SELECT "answer", "id", "question" FROM "quaint"."Entry"

DROP TABLE "quaint"."Entry";

ALTER TABLE "quaint"."new_Entry" RENAME TO "Entry";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

DROP TABLE "quaint"."Chapter";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200318171606-exclude-dates-for-now..20200319101806-simplify-data-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = env("DATABASE_URL")
 }
 generator photonjs {
   provider = "prisma-client-js"
@@ -16,14 +16,6 @@
 model Entry {
   id          String @id  @default(cuid())
   question    String
   answer      String
-  chapterId   Chapter
-
-  @@index([chapterId], name: "ifk_entry_chapter_id")
-}
-
-model Chapter {
-  id          String @id  @default(cuid())
   dayTime     DayTime
-  entries     Entry[]
 }
```


