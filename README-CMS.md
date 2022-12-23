# CMS Setup

## Schemas

### Personal Information

A single Markdown file at `edit-me/cms/personal.md`.

| Field Name        | Type           | Description                                |
| ----------------- | -------------- | ------------------------------------------ |
| `givenName`       | text, required | Your first name                            |
| `familyName`      | text, required | Your last name                             |
| `title`           | text, required | e.g. "Full Stack Developer"                |
| `location`        | text, required | e.g. "Austin, TX or Remote"                |
| `twitterUsername` | text, optional | Your twitter handle without the "@" symbol |

The markdown content will be rendered as HTML to display a short description about yourself.

### Private Information (optional)

A series of Markdown files at `edit-me/cms/privateFields`. You can use a number prefix to order them, as the items will be displayed in the same order they are arranged in the folder.

| Field Name | Type           | Description                                                    |
| ---------- | -------------- | -------------------------------------------------------------- |
| `label`    | text, required | The text label of the private field, e.g. "Email" or "Address" |

The markdown content will be rendered as HTML to display the content of the field. Keep it short!

### Skills

A series of Markdown files at `edit-me/cms/skills`. You can use a number prefix to order them, as the items will be displayed in the same order they are arranged in the folder. You can add more or less than three, but you will probably need to modify the design if you plan to change this.

| Field Name | Type           | Description                                                                                            |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------ |
| `title`    | text, required | A designator to describe the category of skills, e.g. "Soft Skills" or a strength such as "Proficient" |

The markdown content will be rendered as HTML to display the skills for that category. We recommend a simple block of text with comma-separated skills.

### Professional Experiences

A series of Markdown files at `edit-me/cms/professionalExperiences`. You can use a number prefix to order them, as the items will be displayed in the same order they are arranged in the folder.

| Field Name     | Type             | Description                                                                                                         |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| `title`        | text, required   | e.g. "Senior Software Engineer"                                                                                     |
| `organization` | text, required   | The name of the company or organization you work for                                                                |
| `startDate`    | string, required | The start date of your position, formatted in whatever way you like                                                 |
| `endDate`      | string, optional | The end date of your position, formtted in whatever way you like. Leave this out if you currently hold the position |

The markdown content will be rendered as HTML to display a description of each work experience.

### Achievements

A series of Markdown files at `edit-me/cms/achievements`. These are useful for degrees from a university or boot camp, certifications, etc. You can use a number prefix to order them, as the items will be displayed in the same order they are arranged in the folder.

| Field Name    | Type             | Description                                                                 |
| ------------- | ---------------- | --------------------------------------------------------------------------- |
| `achievement` | text, required   | e.g. "B.S. in Computer Science"                                             |
| `institution` | text, required   | The name of the university, boot camp, etc. you earned the achievement from |
| `year`        | number, required | The year you completed the achievement                                      |

The markdown content will be rendered as HTML to display a description of each achievement..

### Hobbies

A single Markdown file at `edit-me/cms/hobbies.md`.

The markdown content will be rendered as HTML to display a freeform description of your hobbies and personal interests.

### Links

A single TypeScript file at `edit-me/cms/links.ts` that exports an array. The array is type safe.

| Field Name | Type           | Description                                                                                         |
| ---------- | -------------- | --------------------------------------------------------------------------------------------------- |
| `title`    | text, required | e.g. "GitHub"                                                                                       |
| `href`     | text, required | The specific URL you wish to link to                                                                |
| `iconName` | text, required | Must match the name of a [Font Awesome brand icon](https://fontawesome.com/search?s=solid%2Cbrands) |
