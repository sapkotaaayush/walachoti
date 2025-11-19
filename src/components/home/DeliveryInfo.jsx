export default function DeliveryInfo() {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Fast Delivery in Maroubra</h2>
        <p className="text-xl mb-8">30-45 mins • Free over $30 • 7 days a week</p>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-4xl mb-2">🚚</div>
            <p>Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🏠</div>
            <p>Pickup</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💳</div>
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}