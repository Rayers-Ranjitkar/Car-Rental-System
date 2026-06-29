export default function AddNewButton({ data = 'Add New Car',onClick }) { /* Props Destructuing, onclick holds the function aka component passed by the parent*/
    return (
        <button
            type="button"
            onClick={onClick} /* This was missing */
            className="mb-6 rounded-lg bg-[#5dabea] px-4 py-2 font-medium text-white hover:bg-[#288de1]"
        >
            {data}
        </button>
    );

}