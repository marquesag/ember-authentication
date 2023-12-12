import { MdMailOutline } from "react-icons/md";

export default () => {
    return (
        <div className="relative">
            <MdMailOutline size='1.4rem' className="text-gray-400 absolute left-3 inset-y-0 my-auto"></MdMailOutline>
            <input
                type="text"
                placeholder="E-mail"
                className="w-full pl-11 pr-3 rounded-md border border-input bg-background p-2.5 xl:py-3 text-sm xl:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>
    )
}