## STI disriminant constraint non-determinism

Issue: https://github.com/mikro-orm/mikro-orm/issues/6449

Repro:

Run `npm install`.

Every time you run `npm run migration:create`, it creates a new migration with a different ordering of the discriminant values.
