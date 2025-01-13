import React from 'react';
import { toast } from 'sonner';

export function ToastSuccess(message) {
    toast.success(message, {
        duration: 2000,
    });
}

export function ToastError(message) {
    toast.error(message, {
        duration: 2000,
    });
}


