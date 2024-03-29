"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
    return (
        <div className=" p-4">
            <div>
                <Modal
                    isOpen
                    onClose={() => {}}
                    title="Test"
                    description="Test desc"
                >
                    Children
                </Modal>
                Hello
            </div>
        </div>
    );
};

export default SetupPage;
