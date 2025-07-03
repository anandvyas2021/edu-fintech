import {
    Dialog,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { Cross } from "lucide-react";

export default function Modal({ open, handleClose, title, children, footer }) {
    return (
        <Dialog size="md" open={open}>
            <Dialog.Overlay>
                <Dialog.Content>
                    <div className="flex items-center justify-between gap-4">
                        <Typography type="h6">Material Tailwind</Typography>
                        <Dialog.DismissTrigger
                            as={IconButton}
                            size="sm"
                            variant="ghost"
                            isCircular
                            color="secondary"
                            className="absolute right-2 top-2"
                        >
                            <Cross className="h-5 w-5" onClick={handleClose} />
                        </Dialog.DismissTrigger>
                    </div>
                    {/* <Typography className="mb-6 mt-2 text-foreground">
                        {children}
                    </Typography> */}
                    <div className="mt-4 mb-6 space-y-4">{children}</div>
                    <div className="mb-1 flex items-center justify-end gap-2">
                        <Dialog.DismissTrigger
                            as={Button}
                            variant="ghost"
                            color="error"
                            onClick={handleClose}
                        >
                            Cancel
                        </Dialog.DismissTrigger>
                        <Button>Get Started</Button>
                    </div>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog>
        // <Dialog
        //     size="md"
        //     open={open}
        //     handler={handleClose}
        //     className="rounded-lg"
        // >
        //     <Dialog.Trigger className="flex justify-between items-center">
        //         <h3 className="text-lg font-semibold">{title}</h3>
        //         <IconButton
        //             variant="text"
        //             color="blue-gray"
        //             onClick={handleClose}
        //         >
        //             ✕
        //         </IconButton>
        //     </Dialog.Trigger>

        //     <DialogBody className="space-y-4">{children}</DialogBody>

        //     {footer && <DialogFooter>{footer}</DialogFooter>}
        // </Dialog>
    );
}
