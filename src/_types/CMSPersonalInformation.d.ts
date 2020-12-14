interface CMSPersonalInformation<RichTextType> {
  about_me_description: RichTextType;
  family_name: string;
  given_name: string;
  hobbies_and_interests: RichTextType;
  id: string;
  job_title: string;
  location: string;
  twitter_username?: string;
}
