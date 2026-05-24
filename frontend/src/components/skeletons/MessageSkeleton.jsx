import React from 'react';

const MessageSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-5">

        <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-accent/10"></div>
            <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-40 bg-accent/10"></div>
                <div className="skeleton h-4 w-28 bg-accent/10"></div>
            </div>
        </div>

        <div className="flex items-center justify-end gap-4">
            <div className="flex flex-col gap-4 items-end">
                <div className="skeleton h-4 w-20 bg-accent/10"></div>
                <div className="skeleton h-4 w-40 bg-accent/10"></div>
            </div>
            <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-accent/10"></div>
        </div>

    </div>
  )
}

export default MessageSkeleton;