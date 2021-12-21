import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
   // console.log(props.currentUser)

    const {
        register,
        errors,
        handleSubmit,
    } = useForm({
        defaultValues: props.currentUser,
    });

    const onSubmit = (data, e) => {
        console.log(data);

        // limpiar campos
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input
                type="text"
                name="name"
                {...register("name", {
                    required: { value: true, message: "Campo Requerido" },
                })}
            />
            <div>{errors?.name?.message}</div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                {...register("email", {
                    required: { value: true, message: "Campo Requerido" },
                })}
            />
            <div>{errors?.email?.message}</div>

            <label>Clave</label>
            <input
                type="password"
                name="password"
                pattern=".{6,}"
                {...register("password", {
                    required: { value: true, message: "Campo Requerido" },
                })}
            />
            <div>{errors?.password?.message}</div>

            <label>Telefono</label>
            <input
                type="tel"
                name="phone"
                placeholder="(contrycode) (citycode) number"
                {...register("phone", {
                    required: { value: true, message: "Campo Requerido" },
                })}
            />
            <div>{errors?.phone?.message}</div>
            <button>Editar usuario</button>
        </form>
    );
};

export default EditUserForm;
