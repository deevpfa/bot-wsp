import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Spinner } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'

export interface iDataAutoComplete {
    label: string
    value: any
    icon: any
}
interface IProps {
    data: iDataAutoComplete[]
    onChange: (e: string) => void
    selectedItem: (e: any) => any
    fetching: boolean
}


export default function Autocomplete({ data, onChange, selectedItem, fetching }: IProps) {
    const [selected, setSelected] = useState<iDataAutoComplete>(null!)
    const [myData, setMyData] = useState(data)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation('global')

    useEffect(() => { data && setMyData(data) }, [data])

    useEffect(() => { setLoading(fetching) }, [fetching])

    useEffect(() => { query && onChange(query) }, [query])

    useEffect(() => { selected && selectedItem(selected.value) }, [selected])


    return (
        <div className="z-50">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(item: any) => item && item.label}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {loading ? (
                                <div className='flex justify-center items-center h-10'>
                                    <Spinner width={20} height={20} />
                                </div>
                            ) :
                                myData.length === 0 || query == '' ? (
                                    <div className="relative cursor-default select-none px-4 py-2">
                                        <span className="text-gray-900">{t('global.no_results')}</span>
                                    </div>
                                ) : (
                                    myData.map((item, index) => (
                                        <Combobox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative  select-none py-2 pl-4 pr-4 z-50 cursor-pointer ${active ? 'bg-secondary-400 text-white' : 'text-secondary-500'}`
                                            }
                                            value={item}
                                        >
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                <span className='mr-2'>{item.icon}</span>
                                                <span className='font-semibold'>{item.label}</span>
                                            </span>
                                        </Combobox.Option>
                                    ))
                                )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
