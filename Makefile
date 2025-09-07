publish:
	npm	publish	--dry-run

	lint:
	git diff --quiet || true
	npx eslint .
