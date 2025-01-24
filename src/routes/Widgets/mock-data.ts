const MOCK_DATA = {
  groups: [
    {
      id: '1',
      name: 'Bellagio',
      contacts: [
        {
          id: '1',
          name: 'Call Center myvegas.com',
          number: '917025556666',
        },
        {
          id: '2',
          name: 'Bellagio Accts Receivable',
          number: '917025557777',
        },
      ],
    },
    {
      id: '2',
      name: 'Mandalay Hotel',
      contacts: [
        {
          id: '1',
          name: 'Mandalay Front Desk',
          number: '917045558888',
        },
        {
          id: '2',
          name: 'Mandalay Accts Receivable',
          number: '917045559999',
        },
      ],
    },
    {
      id: '3',
      name: 'Luxor Hotel',
      contacts: [
        {
          id: '1',
          name: 'Call Center Home',
          number: '917024446666',
        },
        {
          id: '2',
          name: 'Luxor Hotel Home Desk',
          number: '917024447777',
        },
      ],
    },
  ],
};
const findGroupById = (id: string) => MOCK_DATA.groups.find((group) => group.id === id);
export { MOCK_DATA, findGroupById };
