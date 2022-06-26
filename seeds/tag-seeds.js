const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'red',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'teal',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'bronze',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
