import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";

export default function Modal({ open, handleClose, title, children, footer }) {
    return (
        <div>
            <Dialog open={open} onClose={handleClose} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="w-full sm:flex sm:items-start">
                                    <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="flex items-center justify-between text-base font-semibold text-gray-900"
                                        >
                                            {title}
                                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-8">
                                                <X
                                                    aria-hidden="true"
                                                    className="size-4 text-red-600 cursor-pointer"
                                                    onClick={handleClose}
                                                />
                                            </div>
                                        </DialogTitle>
                                        <div className="w-full mt-2">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => handleClose(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Add to Cart
                                </button>
                                <div className="mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto">
                                    {`Total:${"a"}`}
                                </div>
                            </div> */}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
