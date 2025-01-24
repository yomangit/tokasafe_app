import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import "flatpickr/dist/themes/dark.css";
import "flatpickr/dist/plugins/monthSelect/style.css";

flatpickr("#tanggal", {
    disableMobile: true,
    dateFormat: "d-m-Y : H:i", //defaults to "F Y"
    enableTime: true,
});
flatpickr("#due_date", {
    disableMobile: true,
    dateFormat: "d-m-Y ",
});
flatpickr("#completion_date", {
    disableMobile: true,
    dateFormat: "d-m-Y ",
});

flatpickr("#month", {
    disableMobile: "true",
    plugins: [
        new monthSelectPlugin({
            shorthand: true, //defaults to false
            dateFormat: "M-Y", //defaults to "F Y"
            altFormat: "F Y", //defaults to "F Y"
            theme: "dark", // defaults to "light"
        }),
    ],
});