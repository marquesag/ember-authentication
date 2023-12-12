interface InputFieldProps {
    text: string;
  }
  
  export default function InputField(props: InputFieldProps): JSX.Element {
    return (
        <input
          type="text"
          placeholder={props.text}
          className="flex pl-3 w-full rounded-md border border-input bg-background p-2.5 text-sm xl:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
    );
  }