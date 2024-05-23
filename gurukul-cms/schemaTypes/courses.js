import {defineField, defineType} from 'sanity'

const COURSE_TYPE = [
  {title: 'MP', value: 'MP'},
  {title: 'CBSE', value: 'CBSE'},
  {title: 'ICSE', value: 'ICSE'},
  {title: 'Special', value: 'Special'},
]
const MATERIAL_TYPE = [
  {title: 'Blog', value: 'blog'},
  {title: 'Question Paper', value: 'question_paper'},
  {title: 'Video', value: 'video'},
  {title: 'Other', value: 'other'},
]
const COURSE_STATUS = [
  {title: 'Inactive', value: 'inactive'},
  {title: 'Upcoming', value: 'upcoming'},
  {title: 'Ongoing', value: 'ongoing'},
]
export const courses = defineType({
  name: 'course_detail',
  title: 'Course Details',
  type: 'document',
  fields: [
    defineField({
      name: 'course_type',
      title: 'Course Type',
      type: 'string',
      options: {
        list: COURSE_TYPE.map(({title, value}) => ({title, value})),
      },
    }),

    defineField({
      name: 'special_course',
      title: 'Special Courses',
      type: 'array',
      hidden: ({parent}) => parent?.course_type !== 'Special',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'course_name',
              title: 'Course Name',
              type: 'string',
            },
            {
              name: 'course_image',
              title: 'Course Image',
              type: 'image',
            },

            {
              name: 'course_price',
              title: 'Course Price',
              type: 'number',
            },
            {
              name: 'course_duration',
              title: 'Course Duration',
              type: 'number',
              description: 'In months',
            },
            {name: 'course_start_date', title: 'Course Start Date', type: 'date'},
            {
              name: 'course_status',
              title: 'Course Status',
              type: 'string',
              options: {list: COURSE_STATUS.map(({title, value}) => ({title, value}))},
            },
            {
              name: 'course_description',
              title: 'Course Description',
              type: 'text',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'material',
      title: 'Material',
      type: 'array',
      hidden: ({parent}) => parent?.course_type === 'Special',

      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'class',
              type: 'number',
              title: 'Class',
            },
            {
              name: 'material_type',
              title: 'Material Type',
              type: 'string',
              options: {
                list: MATERIAL_TYPE.map(({title, value}) => ({title, value})),
              },
            },

            {name: 'title', title: 'Title', type: 'string'},
            {name: 'link', title: 'Link', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
