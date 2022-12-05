# Prevent "Permission denied" Error
Every time a bash script is created, renamed or modified on windows:
`git update-index --chmod=+x <script_name>.sh`
then commit and push the change to GitHub.

Example with a console on root directory:

```bash
git update-index --chmod=+x .github\scripts\change-package.sh
git add .
git commit -m "fix: script permission"
git push
```
