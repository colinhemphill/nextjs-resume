interface CMSPRofessionalExperience<RichTextType> {
  end_date?: string;
  id: string;
  is_current?: boolean;
  organization_name: string;
  position_description: RichTextType;
  position_title: string;
  start_date: string;
}
