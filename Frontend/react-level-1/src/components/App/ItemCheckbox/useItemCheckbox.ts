import useAppContext from '../useContext';

interface Props {
    label: string;
    name: string;
}

export default function useItemCheckbox({ label, name }: Props) {
    const context = useAppContext();

    function isChecked() {
        try {
            return context.getCheckbox({ name }).checked;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    function toggleCheckbox({ target }: any) {
        context.setCheckbox({
            label,
            name,
            checked: target.checked,
        });
    }

    return { isChecked, toggleCheckbox };
}
