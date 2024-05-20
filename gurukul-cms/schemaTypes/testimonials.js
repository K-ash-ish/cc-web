import {defineField, defineType} from 'sanity'

export const testimoials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'student_name',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'student_review',
      title: 'Student Review',
      type: 'text',
    }),
    defineField({
      name: 'student_percentage',
      title: 'Student Percentage',
      type: 'number',
      validation: (rule) => rule.min(75).max(100),
    }),

    defineField({
      name: 'student_board',
      title: 'Student Board',
      type: 'string',
      options: {
        list: ['CBSE', 'ICSE', 'MP Board'],
      },
    }),
    defineField({
      name: 'student_class',
      title: 'Student Class',
      type: 'number',
      validation: (rule) => rule.min(1).max(12),
    }),
  ],
})
