import useAppLevel1Context from '../useContext';

interface Props {
    name: string;
}

export default function useItemCheckbox({ name }: Props) {
    const context = useAppLevel1Context();

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
            name,
            checked: target.checked,
        });
    }

    return { isChecked, toggleCheckbox };
}
