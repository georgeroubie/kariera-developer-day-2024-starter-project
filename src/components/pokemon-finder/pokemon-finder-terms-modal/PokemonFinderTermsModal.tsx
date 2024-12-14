import Button from '../../shared/button/Button';
import styles from './PokemonFinderTermsModal.module.css';

type Props = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  onAccept: () => void;
  onDecline: () => void;
};

const PokemonFinderTerms = ({ dialogRef, onAccept, onDecline }: Props) => {
  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis lacus eget tincidunt dapibus. Nulla
          molestie lacus est, nec mattis purus volutpat id. Donec dui purus, volutpat vel fringilla quis, venenatis
          faucibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis
          arcu metus, auctor sed laoreet sit amet, rhoncus et turpis. Morbi fringilla dui maximus feugiat consectetur.
          In nec sapien ante. Sed bibendum, ligula nec blandit dictum, sem nulla gravida ex, ut fermentum sapien ante
          mollis nisi. Donec quis enim placerat, cursus ipsum ut, pellentesque urna. Phasellus euismod, urna nec varius
          condimentum, nisi enim imperdiet sapien, eu molestie sem massa et eros. In hac habitasse platea dictumst. Duis
          sodales varius nulla in accumsan.
        </p>
        <p>
          Donec at dapibus nisl. Pellentesque scelerisque maximus porttitor. Fusce quis varius massa, id aliquet nisl.
          Nunc tincidunt ultrices euismod. Sed at pretium sapien. Sed placerat et neque quis posuere. Aliquam nec
          consectetur nibh, eu ornare turpis. Donec ornare elementum aliquet. Morbi laoreet velit mauris, iaculis
          scelerisque nulla convallis id. Integer vulputate bibendum ante, cursus porttitor nibh auctor eget. Fusce in
          molestie ex. Suspendisse diam ligula, imperdiet nec vestibulum sit amet, laoreet nec lectus. Suspendisse
          potenti. In hac habitasse platea dictumst. Sed et elit eu ante finibus dignissim ac et lacus.
        </p>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.dialogButton} variation="error" onClick={onDecline}>
          Decline
        </Button>
        <Button className={styles.dialogButton} onClick={onAccept}>
          Accept
        </Button>
      </div>
    </dialog>
  );
};

export default PokemonFinderTerms;
