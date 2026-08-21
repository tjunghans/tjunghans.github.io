---
title:  "Screening CVs with the Help of a Spreadsheet"
tags: hiring recruiting screening cv resume
category: recruiting
---

To bring more structure to my process of reviewing software engineer candidates' CVs, I use a spreadsheet — Excel, in my case.

The columns include the candidate's name, several key areas of interest, relevant criteria, and a scoring system.

Example:

| Candidate Name | Java | Oracle | Docker | Spring Boot | Git | HTTP | Team Lead? | 3+ Years at Company? | Finance Sector Experience? | Score |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Joe Soap | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 7 |

## Picking the Keywords

Suppose I'm searching for a senior TypeScript software engineer with expertise in React, TailwindCSS, Jest (for testing), ESLint (for code quality), and web applications. Ideally, the candidate would also have experience with structured products in the finance sector, plus leadership experience — either leading a team or serving as a technical lead.

From that description, I can pull out the following keywords and conditions:

- TypeScript
- React
- TailwindCSS
- Jest
- Testing
- ESLint


- Has led a team?
- Has been technical lead on a team or project?
- Has worked at a bank or another company in the financial sector?
- Has worked as a software engineer for at least three years?

## Conditions

A few additional conditions I like to add:

- Has a well-organized, grammatically correct CV, demonstrating attention to detail and professionalism in presentation.
- Has been at one company for at [least three years]({% post_url 2024-09-08-stay-three-years-before-moving-on %}) (no job hopping, proven track record).

Now it's time to set up a spreadsheet with the following columns:

- Candidate name
- JavaScript
- TypeScript
- React
- TailwindCSS
- Jest
- Testing
- ESLint
- Team lead
- Technical lead
- Financial sector
- Senior
- Neat CV
- 3 years

Each column is worth zero or one point. Depending on how important a criterion is, you can weight its column to reflect that — for example, if TypeScript is a critical skill, multiply its score by three.

Once the spreadsheet is set up, start reviewing résumés and score each candidate by asking questions like:

1. Does the candidate have JavaScript experience? If yes, award one point.
2. Does the candidate have TypeScript experience? If no, award zero points.
3. Does the candidate have ReactJS experience? If yes, award one point.

At this point the candidate has two points — you get the idea for the rest.

The maximum possible score is 13 points (one per keyword or condition, more if columns are weighted). Review your resumes and focus on the candidates who score highest — say, 10 or above, or simply your top 10. Adjusting the weights lets you tailor the process toward whatever skills matter most for the role.

Some criteria are closely related — strong ReactJS skills without a solid JavaScript foundation are unlikely, for instance — so it's worth considering related columns together rather than in isolation.

Feel free to experiment with and refine the scoring formula to suit your own hiring process.
