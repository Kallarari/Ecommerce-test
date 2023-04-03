export interface chartProductProps {
  name: string;
  value: number;
  image: string;
  quantity: number;
  moreButton: () => void;
  minusButton: () => void;
  trashButton: () => void;
}
