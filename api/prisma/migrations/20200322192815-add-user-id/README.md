# Migration `20200322192815-add-user-id`

This migration has been generated by JuliaRechkunova at 3/22/2020, 7:28:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "quaint"."Entry.day"

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Entry" (
    "answer" TEXT NOT NULL DEFAULT '' ,
    "day" TEXT NOT NULL DEFAULT '' ,
    "dayTime" TEXT NOT NULL DEFAULT 'MORNING' ,
    "id" TEXT NOT NULL  ,
    "question" TEXT NOT NULL DEFAULT '' ,
    "userId" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id")
) 

INSERT INTO "quaint"."new_Entry" ("answer", "day", "dayTime", "id", "question") SELECT "answer", "day", "dayTime", "id", "question" FROM "quaint"."Entry"

DROP TABLE "quaint"."Entry";

ALTER TABLE "quaint"."new_Entry" RENAME TO "Entry";

CREATE  INDEX "quaint"."Entry.day_userId" ON "Entry"("day","userId")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200319105449-add-index..20200322192815-add-user-id
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
@@ -18,7 +18,8 @@
   question    String
   answer      String
   dayTime     DayTime
   day         String
+  userId      String
-  @@index([day])
+  @@index([day, userId])
 }
```


