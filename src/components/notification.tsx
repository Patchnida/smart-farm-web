function Notification({ id, icons, timeAgo, read, onRead }) {
    const handleRead = () => {
        if (!read) {
            console.log(`Notification ${id} marked as read`);
            onRead(id);
        }
    };

    return (
        <div>
            <button 
                onClick={handleRead}
                className={`flex flex-row justify-between w-full p-5 border-b-2 border-gray-200 ${read ? 'bg-white hover:bg-slate-100' : 'bg-blue-100 hover:bg-blue-200'}`}>
                <div className='flex flex-row gap-3'>
                    <div>
                        <span>{id}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        {icons.map((icon, index) => (
                            <img 
                                key={index} 
                                src={icon.src} 
                                alt={icon.alt} 
                                className="w-6 h-6" />
                        ))}
                    </div>
                </div>
                <div>
                    <span>{timeAgo}</span>
                </div>
            </button>
        </div>
    );
}

export default Notification;
