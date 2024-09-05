export type HeaderBlogProps = {
    name: string;
};
export default function HeaderBlog({ name }: HeaderBlogProps) {
    return (
        <div className='h-[57px] w-fit content-center rounded-[24px] bg-shiftover-blue px-[27px] py-[7px] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
            <p className='text-header text-white'>{name}</p>
        </div>
    );
}
