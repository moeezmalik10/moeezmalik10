# Setup Guide

This kit contains everything needed for your animated GitHub profile README.

## 1. What's in this zip

```
moeezmalik10-readme-kit/
├── README.md                          → your profile README, ready to use
├── .github/
│   └── workflows/
│       └── snake.yml                  → GitHub Action that generates the animated snake
└── SETUP.md                           → this file
```

## 2. Where these files go

Both `README.md` and `.github/workflows/snake.yml` go into the **same repo**:
`https://github.com/moeezmalik10/moeezmalik10`

(This is your special "profile README" repo — it must be named exactly
your username for GitHub to show it on your profile page.)

## 3. Step-by-step

1. **Download and unzip** this file locally.
2. Clone your profile repo if you haven't already:
   ```
   git clone https://github.com/moeezmalik10/moeezmalik10.git
   cd moeezmalik10
   ```
3. **Copy both files/folders** from the unzipped kit into the cloned repo,
   overwriting the existing `README.md` if one exists:
   ```
   cp -r /path/to/moeezmalik10-readme-kit/README.md .
   cp -r /path/to/moeezmalik10-readme-kit/.github .
   ```
4. **Commit and push:**
   ```
   git add .
   git commit -m "Add animated profile README and snake workflow"
   git push origin main
   ```
   (If prompted, you can also just drag-and-drop both the file and the
   `.github/workflows/snake.yml` file individually through the GitHub web UI
   using "Add file → Upload files" — no git command line needed.)

## 4. Run the snake workflow once, manually

1. Go to your repo on GitHub → **Actions** tab.
2. In the left sidebar, click **Generate Snake**.
3. Click **Run workflow** → **Run workflow** (green button).
4. Wait ~30 seconds. You should see a green checkmark when it finishes.
5. GitHub will auto-create a new branch called **`output`** containing the
   generated SVG/GIF files. You don't need to touch this branch — the
   workflow will keep it updated automatically once a day (see the `cron`
   schedule in `snake.yml`).

## 5. Verify it's working

Visit your profile at `https://github.com/moeezmalik10` — the README should
render with:
- An animated waving header banner
- A typing-effect tagline that cycles through phrases
- Live GitHub stats cards (auto-updating, no setup needed)
- The animated snake eating your contribution graph (only visible once
  step 4 above is complete)

## 6. Notes & troubleshooting

- **Snake looks empty/broken at first?** The snake "eats" your contribution
  graph — if you don't have much recent commit activity, the animation will
  look sparse. This is expected and will fill in as you commit more.
- **Snake image shows a broken icon?** This means the `output` branch
  hasn't been generated yet — go back to step 4.
- **Want a different snake color scheme?** Edit the `outputs:` block in
  `snake.yml` — the `color_snake` and `color_dots` params accept any hex
  colors. See https://github.com/Platane/snk for all options.
- **Want a different stats card theme?** In `README.md`, change `theme=tokyonight`
  to any theme from https://github.com/anuraghazra/github-readme-stats#themes
  (e.g. `dracula`, `radical`, `github_dark`).
- All dynamic elements (typing SVG, stats cards, snake) are free, third-party
  services (readme-typing-svg, github-readme-stats, capsule-render, Platane/snk)
  commonly used in GitHub profile READMEs — no API keys or accounts required
  except for the snake, which just needs the Action enabled on your own repo.
