type SlotBookingProps = {
  text: string;
};

export default function SlotBooking(props: SlotBookingProps) {
  return (
    <div className="booking-container">
      <div className="booking-content">
        <span className="booking-subtitle">Book your slot at </span>
        <span className="booking-text">{props.text}</span>
      </div>
    </div>
  );
}
