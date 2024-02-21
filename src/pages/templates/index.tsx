import ActiveLink from '@/components/ActiveLink';
import Skeleton from '@/components/Skeleton';
import { classNames } from '@/functions/classNames';
import { EnvelopeIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

interface iTemplate {
  name: string;
  title: string;
  status: string;
  category: string;
}

const templatesData: iTemplate[] = []

export default function Templates() {

  useEffect(() => {
    fetch('https://graph.facebook.com/v16.0/114786491616592/message_templates', {
      headers: new Headers({
        'Authorization': 'Bearer EAACZBvH7itQEBOxIKdeuXgz5eynZBHfOPZBw8a1XwaMlBD4ZBe09E08ZBYDd8jwHOg24hZBwbDjHraiTK14IVjxCCxRlxrzQTaqmp2rsUc5ZC5ILtZCo2cAUcszxFIL1zmq2AGVKDs6ZBmxPlqfHqB5UXC0ZAG3Nl8iN1PmyP0YxbZACGKr9WxWHrp3YTxZAi7iCfHgvpHfPIdWReWaSkSZAmXprtGXU25b8ZD',
      }),
    })
      .then(res => res.json())
      .then(data => {
        setisFetching(false)
        setTemplatesAux(data.data)
        setTemplates(data.data)
      })
  }, [])


  const [templatesAux, setTemplatesAux] = useState<any[]>([])
  const [templates, setTemplates] = useState<any[]>([])
  const [isFetching, setisFetching] = useState<boolean>(true)

  const searchTable = (value: string) => {
    if (value === "" || !value) {
      return setTemplates(templatesAux)
    }
    const searchData = templates.filter((item: any) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
    setTemplates(searchData)
  }

  const useTemplate = (template: iTemplate) => {
    console.log(template)
  }

  return (
    <div className='sm:p-3 lg:p-6'>

      <div className="w-full mb-5">
        <Input
          type="text"
          onChange={(e) => searchTable(e.target.value)}
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>
      {
        isFetching ? <Skeleton columns={5}/> :
        <>
        
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates && templates.map((template: iTemplate, index: number) => (
          <li onClick={() => useTemplate(template)} key={template.name} className={classNames("col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow", template.status == 'APPROVED' ? '' : 'pointer-events-none opacity-50')}>
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{template.name.toUpperCase()}</h3>
                  {/* className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20" */}
                  <span className={classNames("inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset", template.status == 'APPROVED' ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-gray-50 text-gray-700 ring-gray-600/20')} >
                    {template.status == 'APPROVED' ? 'Habilitado' : 'Deshabilitado'}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{template.title}</p>
              </div>
              {/* <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={template.imageUrl} alt="" /> */}
            </div>
          </li>
        ))}
      </ul>
      </>
      }
    </div>
  )
}

            // <div>
            //   <div className="-mt-px flex divide-x divide-gray-200">
            //     <div className="flex w-0 flex-1">
            //       {/* className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900" */}
            //       <ActiveLink
            //         className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            //         href={template.status == 'APPROVED' ? `/templates/${template.name}` : '#'}
            //         content={'Usar'}
            //         key={index}
            //       />
            //     </div>
            //     {/* <div className="-ml-px flex w-0 flex-1">
            //     <a
            //       href={`tel:${template.telephone}`}
            //       className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            //     >
            //       <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            //       Call
            //     </a>
            //   </div> */}
            //   </div>
            // </div>