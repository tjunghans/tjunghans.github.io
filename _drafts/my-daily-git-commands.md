---
date: 2024-11-20 21:39:00 +02
title: My daily git commands
tags: git versioning software git-flow
category: git
---

[Git](https://git-scm.com) is the defacto version control system for source code and other documents. 


I've been using git since 2007 and I'll share the commands I use daily in the next couple of lines.

## Some context
For professional and private projects I use the [github flow](https://docs.github.com/en/get-started/using-github/github-flow) collaboration workflow. 

This works the same as the [git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

In this workflow one creates a new feature branch for a change, and merges those changes back into the main branch via a pull request (also referred to as a merge request), which is basically a [git merge](https://git-scm.com/docs/git-merge) that is preceeded by a [code review](https://about.gitlab.com/topics/version-control/what-is-code-review/). 

The commands I use daily are the ones that support this workflow.


## Commands
I aliased almost all git commands and I've been using these aliases almost daily for years.

### `git clone` aliased with `gcl`. 

I don't use this command every day, because under normal circumstances it is only needed once during the lifetime of a repository. I list it here for the sake of completeness.


### `git pull` aliased with `gpl`.

Pull from remote and apply to local branch. This is a command I use heavily. Usually it is to get the latest state of the `main` branch.


`git push` aliased with `gph`
Push local branch changes to remote. I use this command mostly with the `--force` attribute to push changes to a feature branch I created and work on alone. The last part is important. Force pushing to a branch that others collaborate one, will cause an error for others, in which case they need to reset their local state.


`git push --force` aliased with `gpf`
Push local branch changes that include a rebase (rewrite of history) and forcefully push and overwrite remote.

`git status` aliased with `gs`
Check which files have changed.

`git add --all .` aliased with `ga`
Stage all changes (including deletions) for the next commit.

`git commit` aliased with `gc`.

`git rebase -i HEAD~2` aliased with `gril`

`git commit --amend`. 