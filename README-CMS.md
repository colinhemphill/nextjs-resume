# CMS Setup

## Schemas

### Personal Information

Create a schema type with a key of `personal_information`.

| Field Name              | Type      | Description                                                            |
| ----------------------- | --------- | ---------------------------------------------------------------------- |
| `given_name`            | text      | Your first name                                                        |
| `family_name`           | text      | Your last name                                                         |
| `job_title`             | text      | e.g. "Full Stack Developer"                                            |
| `about_me_description`  | rich text | A short paragraph or two to describe who you are and what you're about |
| `location`              | text      | e.g. "Austin, TX or Remote"                                            |
| `twitter_username`      | text      | Your twitter handle without the "@" symbol                             |
| `hobbies_and_interests` | rich text | A short paragraph or two about what you do outside of work             |

### Private Information (optional)

Create a schema type with a key of `private_information`. This information will _only_ be accessible via a private link that you provide, and will not be visible to the general public.

| Field Name | Type      | Description                                                                                              |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------- |
| `label`    | text      | The text label of the private field, e.g. "Email" or "Address"                                           |
| `content`  | rich text | Rich content of the private field. Be sure to add links if desired, including `tel:` and `mailto:` links |

### Skills

Create a schema type with a key of `skills`. These skills will be listed in three separate groups organized by your proficiency with the skill. You can add more or less than three, but you will probably need to modify the design if you plan to change this.

| Field Name    | Type   | Description                                                                                             |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `level_name`  | text   | A designator to describe your proficiency with this group of skills, e.g. "Proficient" or "Comfortable" |
| `level`       | number | This should be either 1, 2, or 3                                                                        |
| `skills_list` | text   | e.g. "React, HTML, CSS"                                                                                 |

### Professional Experience

Create a schema type with a key of `professional_experience`.

| Field Name             | Type      | Description                                                             |
| ---------------------- | --------- | ----------------------------------------------------------------------- |
| `position_title`       | text      | e.g. "Senior Software Engineer"                                         |
| `organization_name`    | text      | The name of the company or organization you work for                    |
| `is_current`           | boolean   | If you currently hold this position or not                              |
| `position_description` | rich text | A description of your roles and responsibilities for the given position |
| `start_date`           | date      | The year and month you started the position (date and time is not used) |
| `end_date`             | date      | The year and month you ended the position (date and time is not used)   |

### Educational Experience

Create a schema type with a key of `educational_experience`.

| Field Name                | Type      | Description                                                                                                                         |
| ------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `achievement_title`       | text      | e.g. "B.S. in Computer Science"                                                                                                     |
| `organization_name`       | text      | The name of the university, boot camp, etc you earned the achievement from                                                          |
| `achievement_description` | rich text | Course work, honors, additional activities you pursued, etc                                                                         |
| `year`                    | number    | The year you completed the achievement. By default these experiences are ordered by year (descending) followed by achievement title |

### Link

Create a schema type with a key of `link`. This will generate a list of icons that link to your external resources (personal website, social media accounts, Git or NPM pages, etc). This works best if the external link matches one of the Font Awesome brands, as these are pre-installed in the app. These links will not be rendered in the PDF.

| Field Name  | Type        | Description                                                                                                 |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `title`     | text        | e.g. "GitHub"                                                                                               |
| `href`      | text or URL | The specific URL you wish to link to                                                                        |
| `icon_name` | text        | Must match the name of a [Font Awesome brand icon](https://fontawesome.com/icons?d=gallery&s=brands&m=free) |

## Add Your Content

Start creating documents in the CMS to fill out any required information. You will need _exactly_ one document for `personal_information`, but the others are designed to work with multiple documents.
