# /ship — Commit, screenshot, and open a PR

When this command is run, follow these steps exactly:

## 1. Check for a running preview server
Use `preview_list` to see if the dev server is running. If not, start it with `preview_start` using the "gessese-v2" config before taking screenshots.

## 2. Take screenshots of all pages
Run the auto-discovery screenshot script — it finds every route automatically:

```
cd /Users/gessese/gessese-v2
/Users/gessese/.nvm/versions/node/v20.20.0/bin/node scripts/screenshot.mjs
```

This scans `src/app` for all `page.tsx` files, resolves dynamic `[slug]` routes from real content sources, and saves PNGs to `.pr-assets/screenshots/`. No manual page list needed — new pages and new posts are captured automatically.

## 3. Stage all changes
Run `git status` to see what changed. Run `git add .` to stage everything including the new screenshots.

## 4. Generate a commit message
Look at `git diff --staged` to understand what changed. Write a clear, specific commit message that describes the actual changes (not just "update site"). Format:
```
feat|fix|style|content: short summary

- Bullet point of each meaningful change
- ...

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

## 5. Create a branch and commit
- Branch name: `ship/YYYY-MM-DD-brief-description` (use today's date)
- Run: `git checkout -b <branch-name>`
- Run: `git commit -m "<message>"`

## 6. Push to GitHub
Run: `git push -u origin <branch-name>`

If no GitHub remote exists yet, tell the user:
> "No GitHub remote set up yet. Run: `gh repo create gessese-v2 --public --source=. --push` to create the repo and push, then run /ship again."

## 7. Create the PR using gh
Use `gh pr create` with a rich body that includes:
- A one-paragraph description of what changed and why
- A screenshot section with embedded images using the **commit SHA** (not the branch name — branch names with `/` break raw URLs):
  ```
  SHA=$(git rev-parse HEAD)
  ![Home](https://raw.githubusercontent.com/sygessese/gessese/${SHA}/.pr-assets/screenshots/home.png)
  ```
  Include every file found in `.pr-assets/screenshots/` — the script captures all pages.
- A checklist of what was changed

Format the PR body like this:
```markdown
## What changed
<1-2 sentence description>

## Screenshots

### Home
![Home](<raw github url to home.png>)

### Becoming
![Becoming](<raw github url to becoming.png>)

## Changes
- [ ] <change 1>
- [ ] <change 2>

🤖 Generated with [Claude Code](https://claude.ai/claude-code)
```

## 8. Report back
Share the PR URL with the user and confirm everything was committed and pushed cleanly.
