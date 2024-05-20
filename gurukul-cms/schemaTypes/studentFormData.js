import {defineField, defineType} from 'sanity'

export const studentFormData = defineType({
  name: 'student_form_data',
  title: 'Student Form Data',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
    }),
    defineField({
      name: 'board',
      title: 'Board',
      type: 'string',
    }),
    defineField({
      name: 'mobile_number',
      title: 'Mobile Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
})
