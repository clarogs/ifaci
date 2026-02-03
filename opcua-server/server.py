from opcua import Server
import time
import random

# 1. Criar servidor
server = Server()

# 2. Endpoint
server.set_endpoint("opc.tcp://0.0.0.0:4840")

# 3. Namespace
uri = "http://ads.freeopcua.server"
idx = server.register_namespace(uri)

# 4. Objeto principal
objects = server.get_objects_node()
sensor = objects.add_object(idx, "Sensor")

# 5. Variáveis
temperature = sensor.add_variable(idx, "Temperature", 25.0)
pressure = sensor.add_variable(idx, "Pressure", 1.0)
running = sensor.add_variable(idx, "Running", True)

# 6. Permitir escrita externa
temperature.set_writable()
pressure.set_writable()
running.set_writable()

# 7. Subir servidor
server.start()
print("OPC-UA Server rodando em opc.tcp://localhost:4840")

try:
    while True:
        # Simulação de processo industrial
        temp_value = round(20 + random.uniform(0, 10), 2)
        pres_value = pressure.get_value()
        run_value = random.choice([True, False])

        temperature.set_value(temp_value)
        pressure.set_value(pres_value)
        running.set_value(run_value)

        print("Pressão:", pressure.get_value())

        time.sleep(1)

finally:
    server.stop()
