import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const PizzaForm = () => {
    const initialFormState = {
        name: "",
        size: "",
        sauce: "",
        toppings: {
            "cheese": false,
            "pepperoni": false,
            "sausage": false,
            "bacon": false,
            "bbq chicken": false,
            "pineapple": false,
            "veggies": false,
        },
        instructions: "",
    };

    const [serverError, setServerError] = useState("");
    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [post, setPost] = useState([]);

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        size: yup.string().required("Must input pizza size"),
        sauce: yup.string().required("Must choose a sauce"),
        toppings: yup.string(),
        instructions: yup.string()
    });

    const formSubmit = e => {
        e.prevent.default();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);
                setFormState({
                    name: "",
                    size: "",
                    sauce: "",
                    toppings: {
                        "cheese": false,
                        "pepperoni": false,
                        "sausage": false,
                        "bacon": false,
                        "bbq chicken": false,
                        "pineapple": false,
                        "veggies": false,
                    },
                    instructions: "",
                });
                setServerError("Success!");
            })
            .catch(err => {
                setServerError("Try Again");
                console.log(err.res)
            });
    }

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors, [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    useEffect(() => {
        console.log("form state change")
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    }

    const renderToppings = () => {
        const toppings = ["cheese", "pepperoni", "sausage", "bacon", "bbq chicken", "pinneaple", "veggies"];
        return toppings.map((topping, top) => {
            return (
                <label key={top}>
                    {topping}
                    <input
                        type="checkbox"
                        name={topping}
                        checked={formState.toppings}
                        onChange={inputChange}
                    />
                </label>
            )
        })

    }




    return (
        <form onSubmit={formSubmit}>
            {serverError ? <p className="error">{serverError}</p> : null}
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}


            </label>
            <label htmlFor="size">
                Size
                <select id="size" name="size" onChange={inputChange}>
                    <option value="Choose a size">--Choose a size--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                </select>
                {errors.size.length > 0 ? (<p className="error">{errors.size}</p>) : null}
            </label>
            <label htmlFor="sauce">
                Sauce
                <select id="sauce" name="sauce" onChange={inputChange}>
                    <option value="Choose an sauce">--Choose a Sauce--</option>
                    <option value="Original Red">Original Red</option>
                    <option value="Garlic Ranch">Garlic Ranch</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Spinach Alfredo">Spinach Alfredo</option>
                </select>
                {errors.sauce.option > 0 ? (<p className="error">{errors.sauce}</p>) : null}

            </label>
            <label htmlFor="toppings" className="toppings">
                Toppings:
               {renderToppings()}
            </label>
            <label htmlFor="instructions">
                Additional Instructions
                <textarea
                    name="instructions"
                    value={formState.instructions}
                    onChange={inputChange}
                //why no name feature for textarea?
                />
                {errors.instructions.length > 0 ? (
                    <p className="error">{errors.instructions}</p>
                ) : null}

            </label>
            <button disabled={buttonDisabled} type="submit">Submit Order</button>
        </form>
    )
}


export default PizzaForm; 