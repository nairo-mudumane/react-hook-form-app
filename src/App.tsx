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

    console.log(watch("email"));
    console.log(errors);
    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" defaultValue="" {...register("email")} />
                <br />

                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span>Password is required</span>}

                <br />
                <button>send</button>
            </form>
        </div>
    );
}

export default App;
