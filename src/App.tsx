import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "./types";

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" defaultValue="" {...register("email")} />

                <input
                    type="password"
                    {...register("password", { required: true })}
                />

                <button>send</button>
            </form>
        </div>
    );
}

export default App;
