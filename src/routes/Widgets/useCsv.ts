import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { Contact, ContactGroup } from './Contact.types.ts';

const groupDataByGroupName = (data: any) => {
  const groupList: any[] = [];
  data.forEach((item: Contact, index: number) => {
    const { group: groupName } = item;
    if (!groupName) return;

    const group = groupList.find((g: ContactGroup) => g.name === groupName);
    // eslint-disable-next-line no-console
    console.info('Group Name:', groupName);

    if (!group) {
      groupList.push({
        id: index,
        name: item.group,
        contacts: [item],
      });
    } else {
      group.contacts.push(item);
    }
  }, {});

  return groupList;
};

const useCsv = (url: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const parsedData = Papa.parse(text, { header: true });
        const groupedData = groupDataByGroupName(parsedData.data);
        setData(groupedData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, [url]);

  // eslint-disable-next-line no-console
  console.info('usecsv hook data:', data);
  return data;
};

export default useCsv;
