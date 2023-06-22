import {
  AcademicCapIcon,
  LinkIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import LoginLogout from '@/components/LoginLogout';
import DropdownButton from '@/components/DropdownButton';



export default function Header() {
  return (
    <header className="bg-white p-8 flex items-center justify-between">
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center flex-nowrap">
          <AcademicCapIcon className="-ml-0.5 mr-1.5 h-10 w-10" aria-hidden="true" />
          <span>Next Auth Example</span>
        </h1>
      </div>
      <div className="mt-0 flex">
        <span>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Edit
          </button>
        </span>

        <span className="ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <LoginLogout />
        </span>
      </div>
    </header>
  )
}
