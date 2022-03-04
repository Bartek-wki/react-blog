const initialState = {
  posts: [
    {
      id: '1',
      title: 'Lorem ipsum dolor',
      shortDescription: 'Morbi viverra leo non neque tincidunt, congue vestibulum...',
      content: 'Vestibulum',
      publishedDate: new Date('2022-02-15'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Pellentesque imperdiet',
      shortDescription: 'Etiam ultricies massa non convallis varius...',
      content: 'Pellentesque convallis',
      publishedDate: new Date('2022-02-21'),
      author: 'Anna Doe'
    },
    {
      id: '3',
      title: 'Vestibulum vel elit',
      shortDescription: 'Cras sodales sapien at bibendum semper...',
      content: 'Vestibulum',
      publishedDate: new Date('2022-03-07'),
      author: 'Jim Brown'
    },
    {
      id: '4',
      title: 'Proin tempus',
      shortDescription: 'Praesent interdum mi ut volutpat volutpat...',
      content: 'Quisque et sapien',
      publishedDate: new Date('2022-03-12'),
      author: 'John Doe'
    },
  ],
};

export default initialState;