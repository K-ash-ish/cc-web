import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'our_mission',
      title: 'Our Mission',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'our_vision',
      title: 'Our Vision',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'faculty_info',
      title: 'Faculty Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'image', name: 'image', title: 'Image', validation: (rule) => rule.required()},
            {name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()},
            {
              name: 'contact_number',
              title: 'Contact Number',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'about_faculty',
              title: 'About Faculty',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
