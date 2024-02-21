import { classNames } from '@/functions/classNames'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

export enum eAlertType {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success'
}

const getIcon = (type: eAlertType) => {
    switch (type) {
        case eAlertType.ERROR:
            return <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        case eAlertType.WARNING:
            return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" aria-hidden="true" />
        case eAlertType.INFO:
            return <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        case eAlertType.SUCCESS:
            return <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
    }
}

const getTextClass = (type: eAlertType) => {
    switch (type) {
        case eAlertType.ERROR:
            return 'text-red-700'
        case eAlertType.WARNING:
            return 'text-yellow-800'
        case eAlertType.INFO:
            return 'text-blue-700'
        case eAlertType.SUCCESS:
            return 'text-green-700'
    }
}

const getBackgroundClass = (type: eAlertType) => {
    switch (type) {
        case eAlertType.ERROR:
            return 'bg-red-50'
        case eAlertType.WARNING:
            return 'bg-yellow-50'
        case eAlertType.INFO:
            return 'bg-blue-50'
        case eAlertType.SUCCESS:
            return 'bg-green-50'
    }
}

export default function Alert({ type = eAlertType.INFO , children } : { type: eAlertType, children:any }) {
  return (
    <div className={classNames("rounded-md p-4", getBackgroundClass(type))}>
      <div className="flex">
        <div className="flex-shrink-0">
            { getIcon(type) }
        </div>
        <div className={classNames("ml-3 flex-1 md:flex md:justify-between text-sm", getTextClass(type))}>
            { children }
          {/* <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p> */}
        </div>
      </div>
    </div>
  )
}