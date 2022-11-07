export default {
 title: 'Ecom',
 name: 'ecom',
 type: 'document',
 fields: [
  {
   title: 'ID',
   name: 'id',
   type: 'number',
  },
  {
   title: 'Name',
   name: 'name',
   type: 'string',
  },

  {
   name: 'slug',
   title: 'Slug',
   type: 'slug',
   options: {
    source: 'name',
    maxLength: 96,
   },
  },
  {
   title: 'Price',
   name: 'price',
   type: 'number',
  },
  {
   title: 'Discount',
   name: 'discount',
   type: 'number',
  },
  {
   title: 'QuantityAvailable',
   name: 'quantityAvailable',
   type: 'number',
  },
  {
   title: 'Category',
   name: 'category',
   type: 'string',
  },
  {
   name: 'images',
   title: 'Images',
   type: 'array',
   of: [
    {
     type: 'image',
     options: {
      hotspot: true,
     },
    },
   ],
  },
  {
   title: 'CurrentPrice',
   name: 'currentPrice',
   type: 'number',
  },
  {
   title: 'Sizes',
   name: 'sizes',
   type: 'array',
   of: [{ type: 'string' }]
  },
  {
   title: 'Description',
   name: 'description',
   type: 'string',
  },
 ],
}