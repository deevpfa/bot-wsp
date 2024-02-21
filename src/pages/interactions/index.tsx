import { useState } from "react";


interface iInteraction {
  id: number;
  name: string;
  template: string;
  client: string;
  date: string;
}
const interactionsData: any = [
  {
    id: 1,
    name: 'Jane Cooper',
    template: 'Regional Paradigm Technician',
    client: 'Optimization',
    date: 'Jan 21, 2020',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    template: 'Regional Paradigm Technician',
    client: 'Optimization',
    date: 'Jan 21, 2020',
  }
]

const index = () => {

  const [interactions, setInteracions] = useState<any[]>([])

  return (
    <div className='sm:p-3 lg:p-6'>
QW
    </div>
  )
}

export default index